import {NextResponse} from "next/server";

export async function GET(req) {
    return NextResponse.json({status: 200, message: "Server Working"},{status: 200})
}

