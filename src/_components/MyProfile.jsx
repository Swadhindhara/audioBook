import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form';
import avatar from '../assets/graphics/avatar.svg'
import { LucideCamera } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/features/User/userSlice';


const MyProfile = ({ props }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors }, reset, } = useForm();

    const [formVar, setformVar] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    })
    const handleUpdate = (data) => {
        dispatch(
            updateUser({ name: data.name, email: data.email, number: data.number })
        );
    };


    useEffect(() => {
        if (props) {
            setformVar({
                name: props?.name,
                email: props?.email,
                phoneNumber: props?.phoneNumber,
            })
        }
    }, [props])



    return (
        <div>
            <form
                className="box w-full"
                onSubmit={() => handleUpdate(handleSubmit())}
            >
                <div className="right w-full lg:w-full flex gap-5 items-center lg:items-start flex-col-reverse lg:flex-row">
                    <div className="left w-full lg:w-2/3 flex flex-col items-start gap-4">
                        <div className="box flex flex-col gap-2 w-full">
                            <label htmlFor="name">Full Name</label>
                            <Input
                                type="text"
                          
                                defaultValue={formVar?.name}
                                // onChange
                            />
                            {errors.name && (
                                <small className="text-red-600">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
                        <div className="box flex flex-col gap-2 w-full">
                            <label htmlFor="number">Mobile Number</label>
                            <Input
                                type="number"
                                {...register("number", {
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: "Please enter a mobile number.",
                                    },
                                })}
                                value={formVar?.phoneNumber}

                            />
                            {errors.name && (
                                <small className="text-red-600">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
                        <div className="box flex flex-col gap-2 w-full">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                {...register("email", {
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message:
                                            "Please enter a valid email address.",
                                    },
                                })}
                                value={formVar?.email}

                            />
                            {errors.email && (
                                <small className="text-red-600">
                                    {errors.email.message}
                                </small>
                            )}
                        </div>
                        <Button className="self-center bg-amber-600 cursor-pointer text-white hover:bg-black mt-5">
                            Save Changes
                        </Button>
                    </div>
                    <div className="right w-1/3 flex flex-col items-center gap-3">
                        <img
                            src={avatar}
                            className="md:w-32 md:h-32 w-28 h-28 rounded-md"
                            alt="avatar_icon"
                        />
                        <Button
                            variant="outline"
                            className="cursor-pointer border-orange-300 border"
                        >
                            <LucideCamera />
                            Change Avatar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyProfile
