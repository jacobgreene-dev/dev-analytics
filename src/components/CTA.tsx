
'use client'
import { motion } from "framer-motion"

export default function CTA() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 items-center justify-center text-center max-h-screen px-6 pt-24 text-white"
        >
            <div>
                <h1 className="text-5xl md:text-[150px] font-bold leading-tight text-left text-wrap">
                    DevAnalytics
                </h1>

                <div className="opacity-0">
                    <p>Daily job data ingestion powers evidence-backed analytics and reports, helping aspiring developers
                        strategically focus their learning and stay competitive in local job markets.</p>
                    <p>A platform for entry-level developers to monitor the real-time job market demand for key technical skills—
                        including programming languages, frontend frameworks, backend tools, databases, DevOps, version control,
                        mobile development, and soft skills.</p>
                </div>


            </div>
        </motion.section>
    )
}
