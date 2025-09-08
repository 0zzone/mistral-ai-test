"use client"

import { useMe } from "@/features/auth/hooks"
import FinalResponse from "@/features/mistral/components/FinalResponse"
import FormDiscussion from "@/features/mistral/components/FormDiscussion"
import { useDiscuss } from "@/features/mistral/hooks"
import Image from "next/image"


const Page = () => {

    const { data: profile } = useMe()
    const { mutate: discuss, isPending, data, isSuccess } = useDiscuss()

    return (
        <div className={`${data && isSuccess ? "w-[90%] block mx-auto mt-36 pb-20" : "w-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} max-h-content  text-white`}>
            {isPending ? <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src="/lechat-gif.gif" alt="Loading..." width={150} height={150} unoptimized />
                <p className="text-center">Loading...</p>
            </div>
            : data && isSuccess ? <FinalResponse finalResponse={data} />
            : profile && <FormDiscussion profile={profile} discuss={discuss} />}
        </div>
    )
}

export default Page