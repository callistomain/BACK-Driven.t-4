import { prisma } from "@/config";

// FIND ========================================================================

async function findById(id: number) {
  return await prisma.room.findUnique({
    where: { id },
    include: { Booking: true }
  });
}

// EXPORT ======================================================================

const roomRepository = {
  findById
};

export default roomRepository;
