import type { FinalResponse as FinalResponseType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner"
import { Button } from "@/components/ui/button";

const FinalResponse = ({ finalResponse }: { finalResponse: FinalResponseType }) => {
    const {
        coverLetterExample,
        keywordsForResume,
        keywordsForInterview,
        improvementAreas,
        strengths,
        salaryRange,
        matchingPercentage
    } = finalResponse;

    const getMatchingColor = (percentage: number) => {
        if (percentage >= 80) return "bg-green-500";
        if (percentage >= 60) return "bg-yellow-500";
        return "bg-red-500";
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(coverLetterExample)
        toast.success("Cover letter copied to clipboard!")
    }

    return (
        <div className="w-full text-white space-y-6">
            {/* Header Section - Horizontal */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Job Analysis Results</h1>
                        <p className="text-white/80">Here's your comprehensive job match analysis</p>
                    </div>
                    <div className="text-center">
                        <div className={`w-20 h-20 rounded-full ${getMatchingColor(matchingPercentage)} flex items-center justify-center mb-2`}>
                            <span className="text-2xl font-bold">{matchingPercentage}%</span>
                        </div>
                        <span className="text-sm opacity-80">Match Score</span>
                    </div>
                    <div className="text-center">
                        <div className="text-sm opacity-80 mb-1">Expected Salary</div>
                        <div className="text-xl font-bold text-white">
                            {salaryRange.currency} {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()}
                        </div>
                    </div>

                </div>
            </div>

            {/* Main Content Grid - 4 Columns */}
            <div className="">
                
                <div className="flex justify-between gap-6 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            ✨ Your Strengths
                        </h2>
                        <div className="space-y-3">
                            {strengths.map((strength, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm leading-relaxed">{strength}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Improvement Areas */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            🎯 Areas to Improve
                        </h2>
                        <div className="space-y-3">
                            {improvementAreas.map((area, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm leading-relaxed">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-6 mb-6">
                    {/* Resume Keywords */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            📄 Resume Keywords
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {keywordsForResume.map((keyword, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-xs">
                                    {keyword}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Interview Keywords */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            💬 Interview Keywords
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {keywordsForInterview.map((keyword, index) => (
                                <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-400/30 text-xs">
                                    {keyword}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Cover Letter Section - Full Width */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        ✍️ Cover Letter Example
                    </h2>
                    <div className="flex gap-3">
                        <Button 
                            onClick={copyToClipboard}
                            variant="secondary"
                            className="cursor-pointer"
                        >
                            📋 Copy
                        </Button>
                    </div>
                </div>
                <div className="bg-black/20 rounded-lg p-6 border border-white/10 max-h-80 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-white/90 font-sans leading-relaxed">
                        {coverLetterExample}
                    </pre>
                </div>
            </div>

            
        </div>
    );
}

export default FinalResponse;