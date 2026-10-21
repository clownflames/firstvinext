import { NextRequest, NextResponse } from "vinext/shims/server";

export async function GET(request:NextRequest) {
    return NextResponse.json({
      result:"Hello user"
    })
}