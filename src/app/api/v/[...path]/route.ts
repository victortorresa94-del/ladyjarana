import { get, head } from '@vercel/blob';

export const dynamic = 'force-dynamic';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const pathname = path.map(decodeURIComponent).join('/');

  let meta;
  try {
    meta = await head(pathname);
  } catch {
    return new Response(JSON.stringify({ error: 'blob not found', pathname }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const range = req.headers.get('range') || undefined;
  const result = await get(pathname, {
    access: 'private',
    headers: range ? { range } : undefined,
  });
  if (!result || !result.stream) {
    return new Response('blob not found', { status: 404 });
  }

  const headers = new Headers();
  headers.set('Content-Type', meta.contentType || 'application/octet-stream');
  headers.set('Accept-Ranges', 'bytes');
  const cl = result.headers.get('content-length');
  if (cl) headers.set('Content-Length', cl);
  const cr = result.headers.get('content-range');
  if (cr) headers.set('Content-Range', cr);
  headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');

  return new Response(result.stream as ReadableStream, {
    status: result.statusCode || 200,
    headers,
  });
}
