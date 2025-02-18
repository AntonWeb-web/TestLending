import { ChangeEvent, useState } from 'react'
import { FC } from 'react'
import Styles from './Landing.module.css'
import { useNavigate } from 'react-router-dom';
import { ImSpinner8 } from 'react-icons/im';
import { APIRequest } from '../../Requests/actions';

interface FormData {
    name: string
    phone: string
}

const Landing: FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<FormData>({ name: '', phone: '' })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setLoading(true)
        if (localStorage.getItem('uuid')) {
            setError('Вы уже отправляли запрос')
            setLoading(false)
            return
        }

        const uuidResponse = await APIRequest(formData)
        if (uuidResponse) {
            localStorage.setItem('uuid', uuidResponse)
            setLoading(false)
            navigate('/hellopage',)
        }
    }

    return (
        <div>
            <h1> Оставьте свои данные </h1>
            {error ? <h3> {error} </h3> : null}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'> Имя: </label>
                    <input
                        className={Styles.input}
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Введите ваше имя'
                    />
                </div>

                <div>
                    <label htmlFor='phone'> Номер телефона: </label>
                    <input
                        className={Styles.input}
                        type='text'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Введите ваш номер телефона'
                    />
                </div>

                <button
                    type='submit'
                    className={Styles.button}> Отправить {loading && <ImSpinner8 />} </button>
            </form>
        </div>
    )
}

export default Landing