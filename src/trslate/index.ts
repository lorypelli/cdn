import { Hono } from 'hono';

const trslate = new Hono();

trslate.get('/:version?', async (ctx) => {
    const { version } = ctx.req.param();
    if (!version) {
        return ctx.json({ error: "Missing package version!" }, 400);
    }
    const res = await fetch(`https://github.com/lorypelli/trslate/releases/download/v${version}/browser.js`);
    if (!res.ok) {
        return ctx.json({ error: res.statusText }, 500);
    }
    return ctx.text(await res.text());
})

export default trslate;