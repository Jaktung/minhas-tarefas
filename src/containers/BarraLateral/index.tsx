import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={3} />
          <FiltroCard legenda="concluidas" contador={4} />
          <FiltroCard legenda="urgentes" contador={2} />
          <FiltroCard legenda="importantes" contador={2} />
          <FiltroCard legenda="normal" contador={3} />
          <FiltroCard ativo legenda="todas" contador={7} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
