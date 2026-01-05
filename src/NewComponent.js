import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2, Headphones, ArrowRight } from 'lucide-react';

const XHSPost = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        // Slide 1: Cover
        {
            type: 'cover',
            title: "为什么你什么都没做1111111111",
            highlight: "却觉得精疲力竭？",
            subtitle: "首期播客：解开「精神熵」的内耗枷锁",
            tag: "心理成长 / 效率提升"
        },
     ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 p-4 font-sans">
            {/* 模拟手机容器 */}
            <div className="relative w-full max-w-[400px] aspect-[3/4] bg-white shadow-2xl rounded-3xl overflow-hidden">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full"
                    >
                        {/* 渲染不同类型的幻灯片 */}
                        {slides[currentSlide].type === 'cover' && (
                            <div className="h-full flex flex-col justify-between p-10 bg-[#F9F8F6]">
                                <div className="space-y-2">
                                    <div className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                                        {slides[currentSlide].tag}
                                    </div>
                                    <h2 className="text-4xl font-black text-zinc-800 leading-tight mt-4">
                                        {slides[currentSlide].title}
                                    </h2>
                                    <h2 className="text-4xl font-black text-orange-600 leading-tight">
                                        {slides[currentSlide].highlight}
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="h-1 w-20 bg-zinc-800" />
                                    <p className="text-xl font-bold text-zinc-600">{slides[currentSlide].subtitle}</p>
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Headphones className="w-5 h-5" />
                                        <span className="font-mono tracking-widest">EPISODE 01</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {slides[currentSlide].type === 'list' && (
                            <div className="h-full flex flex-col p-10 bg-white">
                                <h2 className="text-2xl font-black text-zinc-800 mb-10 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-orange-500 rounded-full" />
                                    {slides[currentSlide].title}
                                </h2>
                                <div className="flex-1 space-y-6">
                                    {slides[currentSlide].items.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="mt-1 text-orange-500 font-mono font-bold">0{i+1}</div>
                                            <p className="text-lg text-zinc-700 font-medium leading-snug">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-zinc-50 rounded-2xl border-l-4 border-zinc-800">
                                    <p className="text-sm text-zinc-600 italic font-medium">{slides[currentSlide].footer}</p>
                                </div>
                            </div>
                        )}

                        {slides[currentSlide].type === 'concept' && (
                            <div className="h-full flex flex-col justify-center p-10 bg-orange-50">
                                <Quote className="w-12 h-12 text-orange-200 mb-4" />
                                <h2 className="text-3xl font-black text-zinc-800 mb-6">{slides[currentSlide].title}</h2>
                                <p className="text-xl text-zinc-700 leading-relaxed mb-10">
                                    {slides[currentSlide].desc}
                                </p>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                    <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">核心逻辑</p>
                                    <p className="text-lg font-bold text-zinc-800">{slides[currentSlide].formula}</p>
                                </div>
                            </div>
                        )}

                        {slides[currentSlide].type === 'action' && (
                            <div className="h-full flex flex-col p-10 bg-white">
                                <h2 className="text-2xl font-black text-zinc-800 mb-8">{slides[currentSlide].title}</h2>
                                <div className="space-y-6">
                                    {slides[currentSlide].steps.map((step, i) => (
                                        <div key={i} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                                <CheckCircle2 className="w-12 h-12" />
                                            </div>
                                            <h3 className="font-black text-orange-600 mb-1">STEP 0{i+1}. {step.t}</h3>
                                            <p className="text-zinc-600 text-sm font-medium">{step.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {slides[currentSlide].type === 'cta' && (
                            <div className="h-full flex flex-col items-center justify-center p-10 bg-zinc-900 text-white text-center">
                                <div className="w-20 h-20 bg-orange-600 rounded-3xl mb-8 flex items-center justify-center shadow-xl rotate-3">
                                    <Headphones className="w-10 h-10 text-white" />
                                </div>
                                <h2 className="text-sm font-bold tracking-[0.3em] text-orange-500 mb-2 uppercase">New Episode</h2>
                                <h3 className="text-3xl font-black mb-8">{slides[currentSlide].podcast}</h3>

                                <div className="w-full space-y-3 mb-10">
                                    <p className="text-xs text-zinc-500 font-bold tracking-widest uppercase">Available on</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {slides[currentSlide].platforms.map(p => (
                                            <span key={p} className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-medium border border-zinc-700">{p}</span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-zinc-400 italic text-sm">{slides[currentSlide].slogan}</p>

                                <div className="mt-12 flex items-center gap-2 text-orange-500 animate-pulse">
                                    <span className="text-xs font-bold">去搜索收听</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* 进度条 */}
                <div className="absolute top-4 left-0 w-full px-10 flex gap-1 z-20">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-orange-500' : 'bg-zinc-300/50'}`}
                        />
                    ))}
                </div>

                {/* 左右导航按钮 */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-zinc-800 hover:bg-white/40 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-zinc-800 hover:bg-white/40 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* 底部文案建议 */}
            <div className="mt-8 max-w-[400px] w-full bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
                <h4 className="font-bold text-zinc-800 mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-orange-500" /> 小红书发布建议
                </h4>
                <ul className="text-sm text-zinc-600 space-y-2">
                    <li><strong>标题：</strong> 为什么你什么都没做，却觉得累得要命？</li>
                    <li><strong>正文：</strong> 很多人以为累是因为“干活多”，其实是因为大脑里的“精神熵”太高了。本期播客我们聊聊如何通过简单的动作实现精神熵减，找回掌控感。</li>
                    <li><strong>标签：</strong> #播客推荐 #精神熵 #内耗 #心理学 #成长笔记 #治愈系播客</li>
                </ul>
            </div>
        </div>
    );
};

export default XHSPost;
