import { json } from "@sveltejs/kit";

let likesData = {}; // 각 게시물의 좋아요 개수를 저장하는 객체

export function GET({ url }) {
    const id = url.searchParams.get("id");
    if (!id) return json({ error: "Post ID is required" }, { status: 400 });

    return json({ likes: likesData[id] || 0 });
}

export function POST({ request }) {
    return request.json().then(({ id }) => {
        if (!id) return json({ error: "Post ID is required" }, { status: 400 });

        likesData[id] = (likesData[id] || 0) + 1;
        return json({ message: "Liked!", likes: likesData[id] });
    });
}
