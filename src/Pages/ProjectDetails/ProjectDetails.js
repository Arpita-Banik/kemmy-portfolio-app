import { useParams } from 'react-router';
import data from './projects.json';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const detailsInfo = data.filter(dt => dt.id === projectId);
    console.log(detailsInfo);

    return (
        <div className='project-bg' style={{backgroundColor: '#000'}}>
            <Navbar />
            <div className="container d-flex align-items-center justify-content-center">
                <div className='py-5 mt-5'>
                    <div className="mb-3 text-center ">
                        <div>
                            <img style={{ height: '280px' }} src={detailsInfo[0].image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div>
                            <div className="card-body">
                                <h2 className="font fw-bold text-white">{detailsInfo[0].title}</h2>
                                <h4 className="font fw-bold  text-info">{detailsInfo[0].description}</h4>
                                <h6 className="font fw-bold text-white">Features :  {detailsInfo[0].detail}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href={detailsInfo[0].preview}><button className="btn project-btn my-2"><h5><i class="fas fa-eye pe-1"></i>Live Site</h5></button></a>

                        <a href={detailsInfo[0].clientSide}><button className="btn project-btn bg-info my-2"><h5 className='text-white'><i class="fab fa-github pe-1"></i>Client Side</h5></button></a>

                        <a href={detailsInfo[0].serverSide}><button className="btn project-btn my-2"><h5><i class="fab fa-github pe-1"></i>Server Side</h5></button></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default ProjectDetails;