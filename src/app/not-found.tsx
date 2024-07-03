import { Button } from "@nextui-org/react";
import Link from "next/link";
import { PageTitle } from '@/components/PageTitle/PageTitle'

// Also investigate error page:
// https://nextjs.org/docs/app/building-your-application/routing/error-handling


export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <PageTitle> Error 404</PageTitle>
            <h2>Page Not Found</h2>
            <Link href="/" >
                <Button color="warning"
                    variant="flat"
                    className="text-gray-100 text-lg font-bold p-8 mt-7">Back to Home</Button>
            </Link >
        </div>
    );
}