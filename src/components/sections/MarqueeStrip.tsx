const ITEMS = [
  'HAIRCUTS',
  'COLOR',
  'BEARDS',
  'STYLING',
  'EXTENSIONS',
  'BRAIDS',
  'BLOWOUTS',
  'KIDS CUTS',
  'KERATIN',
  'HIGHLIGHTS',
]

function MarqueeItem({ text }: { text: string }) {
  return (
    <>
      <span className="font-black tracking-[0.08em] uppercase text-sm md:text-base">{text}</span>
      <span className="mx-5 md:mx-8 inline-block w-2 h-2 rounded-full bg-accent flex-shrink-0 self-center" />
    </>
  )
}

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-ink py-4 md:py-5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Track — doubled for seamless loop */}
      <div className="flex items-center whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} />
        ))}
      </div>
    </div>
  )
}
