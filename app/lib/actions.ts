"use server";
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';


export default async function createNote(formData: FormData) {
    const text = formData.get("text") as string;

    await prisma.note.create({
        data: {
            text: text,
        },
    });

    // Assuming `revalidatePath` is a function that you've defined somewhere
    revalidatePath('/');
}
export async function updateNote(id:string,formData: FormData) {
    const text = formData.get("text") as string;
    await prisma.note.update({
        where: {
            id,
        },
        data: {
            text,
        },
    });
    revalidatePath('/');
}
export async function deleteNote(id: string) {
    await prisma.note.delete({
        where: {
            id,
        },
    });

    // Assuming `revalidatePath` is a function that you've defined somewhere
    revalidatePath('/');
}