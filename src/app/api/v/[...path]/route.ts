import { head } from '@vercel/blob';

export const dynamic = 'force-dynamic';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const pathname = path.map(decodeURIComponent).join('/');

  let blob;
  try {
    blob = await head(pathname);
  } catch {
    return new Response(JSON.stringify({ error: 'blob not found', pathname }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const range = req.headers.get('range');
  // For private stores blob.url is unauthorised; blob.downloadUrl is signed.
  const upstream = await fetch(blob.downloadUrl, range ? { headers: { Range: range } } : {});

  const headers = new Headers();
  headers.set('Content-Type', blob.contentType || 'application/octet-stream');
  headers.set('Accept-Ranges', 'bytes');
  const cl = upstream.headers.get('Content-Length');
  if (cl) headers.set('Content-Length', cl);
  const cr = upstream.headers.get('Content-Range');
  if (cr) headers.set('Content-Range', cr);
  headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');

  return new Response(upstream.body, { status: upstream.status, headers });
}
