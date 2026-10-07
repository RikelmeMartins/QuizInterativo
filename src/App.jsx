import { useState } from 'react'
import perguntas from './components/perguntas'

function App() {
  const [tela, setTela] = useState('inicio')
  const [indice, setIndice] = useState(0)
  const [selecionada, setSelecionada] = useState(null)
  const [pontos, setPontos] = useState(0)

  const atual = perguntas[indice]
  const respondeu = selecionada !== null
  const ultima = indice === perguntas.length - 1

  function comecar() {
    setIndice(0)
    setSelecionada(null)
    setPontos(0)
    setTela('jogando')
  }

  function responder(alternativa) {
    if (respondeu) return
    setSelecionada(alternativa)
    if (alternativa === atual.correta) setPontos(pontos + 1)
  }

  function proxima() {
    if (ultima) {
      setTela('fim')
      return
    }
    setIndice(indice + 1)
    setSelecionada(null)
  }

  function estiloAlternativa(alternativa) {
    const base = 'w-full text-left px-4 py-3 rounded-lg border-2 font-medium transition'
    if (!respondeu) {
      return `${base} border-slate-600 bg-slate-800 hover:border-emerald-400 hover:bg-slate-700 cursor-pointer`
    }
    if (alternativa === atual.correta) {
      return `${base} border-emerald-500 bg-emerald-500/20 text-emerald-300`
    }
    if (alternativa === selecionada) {
      return `${base} border-red-500 bg-red-500/20 text-red-300`
    }
    return `${base} border-slate-700 bg-slate-800 opacity-50`
  }

  function mensagemFinal() {
    const pct = pontos / perguntas.length
    if (pct === 1) return 'Perfeito! Você é um craque! 🏆'
    if (pct >= 0.7) return 'Mandou bem! Joga muito! ⚽'
    if (pct >= 0.4) return 'Nada mal, mas dá pra treinar mais.'
    return 'Precisa de mais treino. Bora de novo?'
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-slate-800/60 rounded-2xl shadow-xl p-6 sm:p-8">
        {tela === 'inicio' && (
          <div className="text-center space-y-6">
            <div className="text-6xl">⚽</div>
            <h1 className="text-3xl font-bold text-emerald-400">Quiz sobre futebol</h1>
            <p className="text-slate-300">
              São {perguntas.length} perguntas. Quantas você acerta?
            </p>
            <button
              onClick={comecar}
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold cursor-pointer transition"
            >
              Começar
            </button>
          </div>
        )}

        {tela === 'jogando' && (
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Pergunta {indice + 1} de {perguntas.length}</span>
                <span>Pontos: {pontos}</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all"
                  style={{ width: `${((indice + (respondeu ? 1 : 0)) / perguntas.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold">{atual.pergunta}</h2>

            <div className="space-y-3">
              {atual.alternativas.map((alternativa) => (
                <button
                  key={alternativa}
                  onClick={() => responder(alternativa)}
                  disabled={respondeu}
                  className={estiloAlternativa(alternativa)}
                >
                  {alternativa}
                </button>
              ))}
            </div>

            {respondeu && (
              <div className="flex items-center justify-between">
                <span className={selecionada === atual.correta ? 'text-emerald-400 font-semibold' : 'text-red-400 font-semibold'}>
                  {selecionada === atual.correta ? 'Acertou!' : `Errou! Resposta: ${atual.correta}`}
                </span>
                <button
                  onClick={proxima}
                  className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold cursor-pointer transition"
                >
                  {ultima ? 'Ver resultado' : 'Próxima'}
                </button>
              </div>
            )}
          </div>
        )}

        {tela === 'fim' && (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Fim de jogo!</h2>
            <p className="text-5xl font-bold text-emerald-400">
              {pontos}/{perguntas.length}
            </p>
            <p className="text-slate-300">{mensagemFinal()}</p>
            <button
              onClick={comecar}
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold cursor-pointer transition"
            >
              Jogar de novo
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
