export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await prisma.contactSubmission.create({
      data: {
        name: String(name),
        email: String(email),
        subject: String(subject),
        message: String(message),
      },
    });

    return NextResponse.json({ success: true, message: 'Contact submission received successfully.' });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
