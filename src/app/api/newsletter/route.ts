import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // In a real app, you'd save to a database or mailing list service
    console.log(`New subscriber: ${email}`);
    
    return NextResponse.json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 });
  }
}
