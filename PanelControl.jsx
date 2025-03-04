
import MenuLateral from './MenuLateral'
import Card from './card'

export const PanelControl = () => {
  return (
    <section className="panel-control">

      <MenuLateral/>

      <div className="panel-control-contenido">
        <Card/>
        <Card/>
        <Card/>
      </div>

      

    </section>
  )
}

export default PanelControl


