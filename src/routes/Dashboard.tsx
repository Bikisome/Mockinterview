import { Headings } from "@/components/Headings";
import { InterviewPin } from "@/components/Pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus, ChevronRight, CalendarCheck, Award, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Animate variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export const Dashboard = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setLoading(true);
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          return {
            id,
            ...doc.data(),
          };
        }) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.log("Error on fetching : ", error);
        toast.error("Error..", {
          description: "Something went wrong.. Try again later..",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  // Custom InterviewPin wrapper with animations
  const AnimatedInterviewPin = ({ interview, index }: { interview: Interview; index: number }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 } 
      }}
      className="rounded-xl overflow-hidden"
    >
      <InterviewPin interview={interview} />
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl"></div>
        
        <div className="p-6 md:p-8 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* headings */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Headings
                  title="Dashboard"
                  description="Create and start your AI Mock interview"
                />
              </motion.div>
            </div>
            
            <Link to="/generate/create">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm" 
                  className="relative overflow-hidden bg-primary text-white shadow-md group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:translate-x-full transition-all duration-500 ease-out"></span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r to-primary via-primary/80 from-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                  <span className="relative flex items-center">
                    <Plus className="mr-1.5 h-4 w-4" /> 
                    <span>Add New</span>
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.3, origin: "left" }}
          >
            <Separator className="my-6" />
          </motion.div>
          
          {/* Quick stats if there are interviews */}
          {interviews.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/50 p-4 rounded-xl border border-blue-100 dark:border-gray-700 shadow-sm flex items-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-3">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Interviews</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{interviews.length}</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800/50 p-4 rounded-xl border border-green-100 dark:border-gray-700 shadow-sm flex items-center"
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-3">
                  <CalendarCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">Latest Interview</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[180px]">
                    {interviews[0]?.title?.slice(0, 15) || "N/A"}
                    {interviews[0]?.title?.length > 15 ? "..." : ""}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800/50 p-4 rounded-xl border border-purple-100 dark:border-gray-700 shadow-sm flex items-center sm:col-span-2 md:col-span-1"
              >
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Average Duration</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">30 min</p>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {/* content section */}
          <div className="min-h-[300px]">
            {loading ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <motion.div variants={itemVariants} key={index}>
                    <Skeleton className="h-32 rounded-xl" />
                  </motion.div>
                ))}
              </motion.div>
            ) : interviews.length > 0 ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {interviews.map((interview, index) => (
                  <AnimatedInterviewPin key={interview.id} interview={interview} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-grow items-center justify-center h-80 flex-col"
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  <div className="relative w-48 h-48">
                    <img
                      src="/assets/svg/not-found.svg"
                      className="w-full h-full object-contain"
                      alt="No data"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 0, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        ease: "easeInOut", 
                        times: [0, 0.5, 1],
                        repeat: Infinity
                      }}
                      className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                      <Plus className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6"
                >
                  No Interviews Found
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="w-full md:w-96 text-center text-sm text-gray-500 dark:text-gray-400 mt-2"
                >
                  There is no available data to show. Please add some new mock
                  interviews to get started with your practice.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                  className="mt-6"
                >
                  <Link to="/generate/create">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-white shadow-md group relative overflow-hidden"
                      >
                        <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative flex items-center">
                          <Plus className="mr-2" />
                          Create Your First Interview
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};