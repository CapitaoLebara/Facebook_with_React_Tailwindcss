import Form from './Main/Form'
import Section from './Main/section'
const main = () => {
  return (
    <main>
        <div className="md:bg-main-gray md:pt-30 md:pb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">
                <Section/>
            <div className="md:w-396px md:place-self-end">
                <Form/>
                <div className="hidden md:block text-sm mt-5 text-center">
                    <p><a href="." className='font-bold'>Criar uma Página</a> para uma celebridade, banda ou empresa.</p>
                </div>
            </div>
            </div>

        </div>
    </main>
  )
}

export default main