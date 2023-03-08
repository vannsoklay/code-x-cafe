import Container from "../components/globals/Container";

export default function About() {
  return (
    <main className="snap snap-y snap-mandatory max-h-screen max-w-sreen overflow-y-scroll scroll-smooth">
      <section className="w-full h-screen snap-start bg-nature bg-cover">
        <Container>
          <div className="pt-20 pb-20 flex justify-end items-end w-full h-screen">
            <div className="h-96 w-1/2 bg-white rounded-sm p-4">
              <p>ឈ្មោះពេញរបស់ខ្ញុំគឺ វ៉ាន់ សុខឡាយ។ ខាងក្រៅហៅខ្ញុំថា សុខឡាយ។</p>
            </div>
          </div>
        </Container>
        {/* <div className="pt-40 flex items-end justify-end space-x-6 h-screen">
          <div className="h-96 bg-white">
            <p>ឈ្មោះពេញរបស់ខ្ញុំគឺ វ៉ាន់ សុខឡាយ។ ខាងក្រៅហៅខ្ញុំថា សុខឡាយ។</p>
          </div>
        </div> */}
        {/* <Container>
          <div className="pt-40 flex items-start space-x-6 h-screen">
            <div className="h-56 w-56">
              <img
                src={"assets/soklay.jpg"}
                alt="soklay.png"
                className="h-full w-full object-cover rounded-full cursor-pointer"
              />
            </div>
            <div>
              <p>ឈ្មោះពេញរបស់ខ្ញុំគឺ វ៉ាន់ សុខឡាយ។ ខាងក្រៅហៅខ្ញុំថា សុខឡាយ។</p>
            </div>
          </div>
          <div className="pb-20 flex items-end space-x-6 bg-alone h-screen">
            <div className="h-56 w-56">
              <img
                src={"assets/soklay.jpg"}
                alt="soklay.png"
                className="h-full w-full object-cover rounded-full cursor-pointer"
              />
            </div>
            <div>
              <p>ឈ្មោះពេញរបស់ខ្ញុំគឺ វ៉ាន់ សុខឡាយ។ ខាងក្រៅហៅខ្ញុំថា សុខឡាយ។</p>
            </div>
          </div>
        </Container> */}
      </section>
      <section className="w-full h-screen bg-walk bg-cover snap-start">
        <Container>Section 2</Container>
      </section>
      <section className="w-full h-screen bg-red-200 snap-start">
        <Container>Section 3</Container>
      </section>
      <section className="w-full h-screen bg-white snap-start">
        <Container>Section 4</Container>
      </section>
    </main>
  );
}
