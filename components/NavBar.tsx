"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useMe } from "@/features/auth/hooks"
import Spinner from "@/components/Spinner"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const NavBar = () => {

    const { data: profile, isLoading } = useMe()
    const router = useRouter()

    return(
        <div className="p-5 flex justify-between fixed bg-white/30 top-0 w-full backdrop-blur-md left-1/2 -translate-x-1/2 z-50 items-center">
            <div className="flex items-center gap-5 cursor-pointer" onClick={() => router.push("/")}>
                <Image src="/logo.png" alt="Logo" width={50} height={50} className="w-auto h-auto" />
                <h1 className="text-xl font-bold">Job Matching</h1>
            </div>
            <div className="flex justify-center gap-5">
                <Link href="/">Home</Link>
                <Link href="/discuss">Form</Link>
            </div>
            <Popover>
                <PopoverTrigger className="cursor-pointer">
                    <Avatar>
                        <AvatarImage src={profile?.avatar} />
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    {isLoading ? (
                        <div className="flex justify-center">
                            <Spinner width={4} />
                        </div>
                    ) : (
                        <>
                            <h2 className="font-bold">{profile?.name}</h2>
                            <p>👨‍💻 {profile?.role}</p>
                            <Button
                                size="sm"
                                variant="secondary"
                                className="cursor-pointer mt-2"
                                onClick={() => router.push("/profile")}
                            >
                                Visit my profile &#x2197;
                            </Button>
                        </>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default NavBar