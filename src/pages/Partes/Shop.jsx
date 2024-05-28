import Anonce from "../Shop/Anonce"
import PlanteList from "../Shop/plantes"

function Shop() {
  return (
    <section className=" m-auto container pt-[7rem]">
        <Anonce/>
        <div className="plantes px-12 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <PlanteList/>
        </div>
    </section>
  )
}

export default Shop