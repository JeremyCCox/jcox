import { NextResponse,NextRequest } from 'next/server';
import {setJwt, getJwtData, getJwt} from "test-jman-web-tokens";

export async function middleware(req: NextRequest) {
    try{
        if(req.nextUrl.pathname === "/admin"){
            return NextResponse.next()
        }
        let cookie = req.cookies.get("jwtoken")
        if(cookie){
            let data = await getJwtData(cookie)
            if(data.username === 'jeremyccox'){
                return NextResponse.next()
            }
        }
        return NextResponse.redirect(new URL('/admin', req.url))
    }catch(err){
        return NextResponse.redirect(new URL('/admin',req.url))
    }
}

// Define paths where the middleware should be applied
export const config = {
    matcher: [
        '/admin/:path*',
    ],
};