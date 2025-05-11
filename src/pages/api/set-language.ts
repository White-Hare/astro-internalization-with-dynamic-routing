import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({
    cookies,
    request
}) => {
    const language = await request.text();

    cookies.set("language", language, {
        httpOnly: true,
        sameSite: "strict",
        path: "/",
    });

    return new Response('', { status: 200 });
};