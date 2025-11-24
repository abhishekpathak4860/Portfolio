import React, { useState } from 'react';
import { Cherry, Banana, Star, Diamond, Clover } from 'lucide-react';

type Symbol = 'cherry' | 'banana' | 'star' | 'diamond' | 'clover';

const symbols: Symbol[] = ['cherry', 'banana', 'star', 'diamond', 'clover'];

const symbolComponents = {
  cherry: Cherry,
  banana: Banana,
  star: Star,
  diamond: Diamond,
  clover: Clover,
};

function App() {
  const [reels, setReels] = useState<Symbol[][]>([
    ['cherry', 'banana', 'star'],
    ['banana', 'star', 'diamond'],
    ['star', 'diamond', 'clover'],
  ]);
  const [spinning, setSpinning] = useState(false);
  const [coins, setCoins] = useState(100);
  const [message, setMessage] = useState('');

  const generateFinalResult = () => {
    // 40% chance to win
    const willWin = Math.random() < 0.4;
    
    if (willWin) {
      // If winning, choose a random symbol and make all middle symbols match
      const winningSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      return reels.map(reel => [
        symbols[Math.floor(Math.random() * symbols.length)],
        winningSymbol,
        symbols[Math.floor(Math.random() * symbols.length)]
      ]);
    }
    
    // If not winning, ensure middle row doesn't match
    return reels.map((_, index) => {
      const middleSymbol = symbols[index % symbols.length];
      return [
        symbols[Math.floor(Math.random() * symbols.length)],
        middleSymbol,
        symbols[Math.floor(Math.random() * symbols.length)]
      ];
    });
  };

  const spin = () => {
    if (coins < 10) {
      setMessage('金币不足！');
      return;
    }
    
    setCoins(prev => prev - 10);
    setSpinning(true);
    setMessage('');

    const spinInterval = setInterval(() => {
      setReels(prevReels => 
        prevReels.map(reel => 
          reel.map(() => symbols[Math.floor(Math.random() * symbols.length)])
        )
      );
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      const finalReels = generateFinalResult();
      setReels(finalReels);
      setSpinning(false);
      checkWin(finalReels);
    }, 2000);
  };

  const checkWin = (currentReels: Symbol[][]) => {
    const middleRow = currentReels.map(reel => reel[1]);
    const isWin = middleRow.every(symbol => symbol === middleRow[0]);
    
    if (isWin) {
      const winAmount = 50;
      setCoins(prev => prev + winAmount);
      setMessage(`恭喜您赢得 ${winAmount} 金币！`);
    }
  };

  const SymbolIcon = ({ symbol }: { symbol: Symbol }) => {
    const Icon = symbolComponents[symbol];
    return (
      <Icon
        className="w-16 h-16 text-white"
        style={{
          filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))',
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl w-full mx-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">老虎机游戏</h1>
        
        <div className="bg-gray-700 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-3 gap-4">
            {reels.map((reel, reelIndex) => (
              <div key={reelIndex} className="bg-gray-900 p-4 rounded-lg">
                <div className="flex flex-col gap-4">
                  {reel.map((symbol, symbolIndex) => (
                    <div
                      key={symbolIndex}
                      className={`flex justify-center items-center bg-gray-800 p-2 rounded-lg ${
                        symbolIndex === 1 ? 'border-4 border-yellow-400' : ''
                      }`}
                    >
                      <SymbolIcon symbol={symbol} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-xl text-yellow-400">
            金币: {coins}
          </div>
          
          {message && (
            <div className={`text-lg ${message.includes('赢') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}

          <button
            onClick={spin}
            disabled={spinning || coins < 10}
            className={`
              px-8 py-4 text-xl font-bold rounded-full
              ${spinning || coins < 10
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-yellow-500 hover:bg-yellow-400 transform hover:scale-105 transition'
              }
              text-white shadow-lg
            `}
          >
            {spinning ? '旋转中...' : '开始 (10金币)'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;