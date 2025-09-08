"use client"

import { useMe } from "@/features/auth/hooks";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Experience } from "@/lib/types";
import { Github, Linkedin, ExternalLink, MapPin, Calendar, Briefcase } from "lucide-react";
import Spinner from "@/components/Spinner";
import { Badge } from "@/components/ui/badge"

const Page = () => {
    const { data: user, isLoading, error } = useMe();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
                <Spinner width={12} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Error loading profile</h2>
                    <p className="text-gray-600">Please try again later</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Error loading profile</h2>
                    <p className="text-gray-600">Please try again later</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-600 mb-2">No profile found</h2>
                    <p className="text-gray-500">Please log in to view your profile</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br mt-25">
            <div className="container mx-auto px-4 py-8 max-w-6xl">

                <div className="bg-white/50 rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <Avatar className="w-32 h-32 ring-4 ring-primary/20">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                                {user.name.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                {user.name}
                            </h1>
                            <p className="text-xl text-primary font-medium mb-4 flex items-center gap-2">
                                <Briefcase className="w-5 h-5" />
                                {user.role}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                {user.bio}
                            </p>
                            
                            <div className="flex flex-wrap gap-3">
                                <Button variant="default" size="sm" asChild>
                                    <a href={user.portfolio} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4" />
                                        Portfolio
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={user.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1">
                        <div className="bg-white/50 rounded-2xl shadow-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                Skills & Technologies
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {user.skills.map((skill: string) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        // className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-white/50 rounded-2xl shadow-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                Experience
                            </h2>
                            <div className="space-y-6">
                                {user.experiences.map((experience: Experience, index: number) => (
                                    <div key={index} className="relative border-l-2 border-primary/20 last:border-l-0">
                                        <div className="bg-white/60 rounded-xl p-6 hover:shadow-md transition-shadow">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    {experience.role}
                                                </h3>
                                                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                                                    {experience.endDate === 'Present' ? ' Present' : ` ${new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                                                </span>
                                            </div>
                                            <p className="text-primary font-medium mb-3 flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                {experience.company}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page