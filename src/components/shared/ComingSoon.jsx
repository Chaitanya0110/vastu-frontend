import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { ImHammer2 } from "react-icons/im";
import { BiSolidCastle } from "react-icons/bi";

const ShinyText = ({ text }) => {
  return (
    <div className="relative inline-block overflow-hidden rounded-full bg-slate-800/5 px-6 py-2 border border-slate-200">
      <span className="bg-linear-to-r from-slate-500 via-blue-500 to-slate-500 bg-clip-text text-transparent bg-size-[200%_auto] animate-shimmer font-bold tracking-wide">
        {text}
      </span>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      
      <div className="relative mb-12 w-48 h-48 flex flex-col items-center justify-end">
        
        <div className="absolute top-2 right-12 text-[100px] origin-bottom-right animate-hammer-strike z-20 drop-shadow-xl">
          <ImHammer2 />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-8 bg-slate-200/50 rounded-full blur-md animate-ping z-0"></div>

        <div className="text-[60px] z-10 drop-shadow-md leading-none -translate-x-12 translate-y-3">
          <BiSolidCastle />
        </div>
        
      </div>

      <div className="mb-6">
        <ShinyText text="TOWN HALL UPGRADING..." />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
        Builders are at work!
      </h1>
      
      <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
        Our master builders are currently hammering away at this page. Grab an elixir and check back soon!
      </p>

      <Link to="/">
        <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-custom-blue rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:outline-none">
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b from-transparent via-transparent to-black"></span>
          <span className="absolute top-0 right-0 w-10 h-full bg-white opacity-20 skew-x-30 translate-x-12 group-hover:-translate-x-40 transition-transform duration-700 ease-in-out"></span>
          
          <MdArrowBack className="text-xl transition-transform group-hover:-translate-x-1" />
          <span className="relative">Return to Village</span>
        </button>
      </Link>

    </div>
  );
};

export default ComingSoon;