import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 dark:bg-ink-900 transition-colors duration-300">
      <div className="flex flex-col items-center gap-5">
        <motion.div
          className="relative h-16 w-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 dark:border-accent-400/30" />
          <div className="absolute inset-0 rounded-full border-t-2 border-cyan-600 dark:border-accent-400" />
        </motion.div>
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-accent-300/80 font-medium"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          Loading experience
        </motion.p>
      </div>
    </div>
  );
}
