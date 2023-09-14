import { Card } from "react-bootstrap"

export default function AboutDev() {

  return (
    <>
      <h2>About the Developers</h2>
      <Card className="d-flex align-items-center justify-content-center h-50 bg-dark">
        <Card.Img src="../../public/derek.png" className="w-50 pb-3" />
        <Card.Text className="text-white">Derek Stanley-Howarth</Card.Text>
        <Card.Text>
          <a href="https://github.com/DSHowarth" target="_blank" rel="noopener noreferrer" className="text-decoration-none">GitHub</a>
        </Card.Text>
        <Card.Text>
          <a href="https://www.linkedin.com/in/derek-stanley-howarth-933a46106/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a>
        </Card.Text>
      </Card>
      <Card className="d-flex align-items-center justify-content-center h-50 bg-dark">
        <Card.Img src="../../public/timothy.jpg" className="w-50 pb-3" />
        <Card.Text className="text-white">Timothy Su</Card.Text>
        <Card.Text>
          <a href="https://github.com/timothysu1" target="_blank" rel="noopener noreferrer" className="text-decoration-none">GitHub</a>
        </Card.Text>
        <Card.Text>
          <a href="https://www.linkedin.com/in/timothysu1/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a>
        </Card.Text>
      </Card>
      <Card className="d-flex align-items-center justify-content-center h-50 bg-dark">
        <Card.Img src="../../public/xiaoran.png" className="w-50 pb-3" />
        <Card.Text className="text-white">Xiaoran Cai</Card.Text >
        <Card.Text >
          <a href="https://github.com/Ailllycxr" target="_blank" rel="noopener noreferrer" className="text-decoration-none">GitHub</a>
        </Card.Text>
        <Card.Text>
          <a href="https://www.linkedin.com/in/xrcai/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a>
        </Card.Text>
      </Card>
    </>
  )
}

