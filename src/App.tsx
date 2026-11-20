import { useState } from 'react';
import { products } from './data';
import type { Product } from './types';
import { ProductModal } from './components/ProductModal';

const series = ['TEAM ZONO', 'GOAT apparel', 'notorious qupid'] as const;
const instagram = 'https://www.instagram.com/zono_mma/';

export default function App() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <span className="font-display text-lg font-bold tracking-tight">TEAM ZONO</span>
          <a className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold hover:border-white" href={instagram}>@zono_mma</a>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5">
        <section className="border-b border-zinc-800 py-12 sm:py-20">
          <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl">TEAM ZONO<br /><span className="text-blue-300">APPAREL</span></h1>
          <p className="mt-5 max-w-xl leading-relaxed text-zinc-300">応援TシャツやGOATのオリジナルウェア。購入希望の方は、商品名と希望サイズを @zono_mma のDMへお送りください。最新の在庫もDMでご確認いただけます。</p>
          <nav aria-label="コレクション" className="mt-6 flex flex-wrap gap-2">
            {series.map((name, index) => <a key={name} className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-white" href={`#collection-${index}`}>{name}</a>)}
          </nav>
        </section>
        {series.map((name, index) => (
          <section key={name} id={`collection-${index}`} className="scroll-mt-4 border-b border-zinc-800 py-9 sm:py-14">
            <h2 className="mb-5 font-display text-3xl font-bold uppercase tracking-tight">{name}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {products.filter(product => product.series === name).map(product => {
                const sizes = product.isSoldOut ? [] : product.sizes.filter(size => !product.soldOutSizes?.includes(size));
                return (
                  <button key={product.id} type="button" onClick={() => setSelected(product)} className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 text-left hover:border-blue-300 focus-visible:outline-2 focus-visible:outline-blue-300">
                    <img src={product.imageUrl} alt="" loading="lazy" onError={event => { event.currentTarget.hidden = true; }} className="aspect-square w-full bg-zinc-950 object-cover" />
                    <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
                      <span className="text-sm font-bold leading-snug sm:text-base">{product.name}</span>
                      <span className="mt-auto font-semibold">¥{product.price.toLocaleString('ja-JP')}</span>
                      <span className="text-sm text-zinc-300">{sizes.length ? sizes.join(' / ') : '売り切れ'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-zinc-300">
        <span>TEAM ZONO APPAREL</span>
        <a className="underline underline-offset-4" href={instagram}>Instagramで問い合わせる</a>
      </footer>
      <ProductModal product={selected} isOpen={selected !== null} onClose={() => setSelected(null)} />
    </div>
  );
}
