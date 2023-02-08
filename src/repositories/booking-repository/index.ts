import { prisma } from "@/config";
import { Booking } from "@prisma/client";

// FIND ========================================================================

async function findByUserId(userId: number) {
  return await prisma.booking.findFirst({
    where: { userId },
    select: { 
      id: true,
      Room: true 
    },
  });
}

async function belongToUser(id: number, userId: number) {
  return await prisma.booking.findFirst({
    where: { id, userId }
  });
}

// CREATE ======================================================================

async function createBooking(booking: CreateBookingParams) {
  return await prisma.booking.create({
    data: booking
  });
}

// UPDATE ======================================================================

async function updateBookingRoomById(id: number, roomId: number) {
  return await prisma.booking.update({
    where: { id },
    data: { roomId }
  });
}

// OTHERS ======================================================================

export type CreateBookingParams = Omit<Booking, "id" | "createdAt" | "updatedAt">

// EXPORT ======================================================================

const bookingRepository = {
  findByUserId,
  belongToUser,
  createBooking,
  updateBookingRoomById
};

export default bookingRepository;
