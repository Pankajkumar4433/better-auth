'use client';
import { Shield, Bot, Tv, Headphones, Gamepad2, BookOpen, GraduationCap, Smartphone, Monitor, SquareDashedMousePointer, Key, Laptop } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/landing-grid-card';

const features = [
	{
		title: 'Privacy',
		icon: Shield,
		description: 'Your data is encrypted and never shared with third parties.',
	},
	{
		title: 'Artificial Intelligence',
		icon: Bot,
		description: 'Advanced AI models to help you automate and create.',
	},
	{
		title: 'Streaming',
		icon: Tv,
		description: 'High-quality 4K streaming with zero latency and buffering.',
	},
	{
		title: 'Listening',
		icon: Headphones,
		description: 'Immersive audio experience with spatial sound support.',
	},
	{
		title: 'Gaming',
		icon: Gamepad2,
		description: 'Play your favorite titles with cloud gaming integration.',
	},
	{
		title: 'Reading',
		icon: BookOpen,
		description: 'A distraction-free reading experience for your library.',
	},
	{
		title: 'Education',
		icon: GraduationCap,
		description: 'Access thousands of courses and learning resources.',
	},
	{
		title: 'Mobile App',
		icon: Smartphone,
		description: 'Stay connected on the go with our iOS and Android apps.',
	},
	{
		title: 'Windows Desktop',
		icon: Monitor,
		description: 'Powerful desktop experience optimized for Windows 11.',
	},
	{
		title: 'Design',
		icon: SquareDashedMousePointer,
		description: 'Synchronize your progress across all your devices instantly.',
	},
	{
		title: 'API',
		icon: Key,
		description: 'Biometric and two-factor authentication for your safety.',
	},
	{
		title: 'Multi-Device',
		icon: Laptop,
		description: 'Seamlessly switch between your phone, tablet, and PC.',
	},
];

export default function DemoOne() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto w-full max-w-5xl  px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">

					<h1 className="flex items-center gap-3 text-sm sm:text-[15px] font-mono text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-5">
							README
							<span className="flex-1 h-px bg-foreground/15" />
						</h1>

						<p className="text-sm sm:text-[15px] text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
							Auth that lives{" "}
							<span className="font-medium text-foreground/90 dark:text-foreground/80">
								inside your app
							</span>
							. Composable, plugin-based, and built to scale — powering from
							weekend projects to the biggest{" "}
							<span className="font-medium text-foreground/90 dark:text-foreground/80">
								consumer and enterprise apps
							</span>{" "}
							on the planet.
						</p>

					{/* <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
						Power. Speed. Control.
					</h2>
					<p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
						Everything you need to build fast, secure, scalable apps.
					</p> */}
					<div className="flex items-center gap-4 my-4">
						<span className="text-lg font-medium text-foreground/90 dark:text-foreground/80 tracking-tight shrink-0">
							Features
						</span>
						<div className="flex-1 border-t border-foreground/10" />
					</div>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
