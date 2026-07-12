import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900">
      <div className="flex flex-col items-center gap-5">
        <motion.div
          className="relative h-16 w-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-accent-400/30" />
          <div className="absolute inset-0 rounded-full border-t-2 border-accent-400" />
        </motion.div>
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent-300/80"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          Loading experience
        </motion.p>
      </div>
    </div>
  );
}
