export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, coverageNeed, message } = body ?? {};

    if (!name || !email || !phone || !serviceType || !coverageNeed) {
      return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 });
    }

    await prisma.quoteRequest.create({
      data: {
        name: String(name),
        email: String(email),
        phone: String(phone),
        serviceType: String(serviceType),
        coverageNeed: String(coverageNeed),
        message: String(message ?? ''),
      },
    });

    return NextResponse.json({ success: true, message: 'Quote request received successfully.' });
  } catch (error: any) {
    console.error('Quote API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
