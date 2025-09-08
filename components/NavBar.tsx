"use client"

import Image from "next/image"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useMe } from "@/features/auth/hooks"
import Spinner from "@/components/Spinner"

const NavBar = () => {

    const { data: profile, isLoading } = useMe()

    return(
        <div className="p-5 flex justify-between fixed top-5 bg-white/30 w-3/4 backdrop-blur-md rounded-full left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-5 cursor-pointer" onClick={() => window.location.href = "/"}>
                <Image src="/logo.png" alt="Logo" width={50} height={50} className="" />
                <h1 className="text-xl font-bold">Job Matching</h1>
            </div>
            <Popover>
                <PopoverTrigger className="cursor-pointer">
                    <Avatar>
                        <AvatarImage src={profile?.avatar} />
                    </Avatar>
                </PopoverTrigger>
                {isLoading ? <div>
                    <Spinner width={4} />
                </div> : <PopoverContent>
                    <h2 className="font-bold">{profile?.name}</h2>
                    <p>👨‍💻 {profile?.role}</p>
                        <Button
                            size="sm"
                            variant="secondary"
                            className="cursor-pointer mt-2"
                            onClick={() => window.location.href = "/profile"}
                        >
                            Visit my profile &#x2197;
                        </Button>
                </PopoverContent>}
            </Popover>
        </div>
    )
}

export default NavBar