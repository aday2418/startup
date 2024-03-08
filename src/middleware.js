import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
    console.log('Middleware Running')

    const res = NextResponse.next()

    // Create a Supabase client configured to use cookies
    const supabase = createMiddlewareClient({ req, res })

    // Refresh session if expired - required for Server Components
    const { data: { session }, error } = await supabase.auth.getSession()

    if(!session){
        return NextResponse.redirect("http://localhost:3000?message=login")
    }

    return res
 }

    // Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: [
        '/dashboard/:path*',
    ],
}