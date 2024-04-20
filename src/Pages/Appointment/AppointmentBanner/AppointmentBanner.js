import chair from '../../../assets/images/chair.png';
import backImg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header
            style={{
                background: `url(${backImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            className='my-6 py-12'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-16">
                    <img src={chair} className="w-full md:w-5/6 lg:w-1/2 rounded-lg shadow-2xl" alt='dentist chair' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;