import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DasboardLayout";
import Head from "../../components/Head";
import {
  HiLocationMarker,
  HiOutlineStatusOffline,
  HiStatusOnline,
} from "react-icons/hi";
import { FaMoneyBill, FaMoneyBillAlt } from "react-icons/fa";
import { MdGroup, MdMoneyOff, MdPerson, MdTitle } from "react-icons/md";
import { BiCalendar, BiCalendarCheck } from "react-icons/bi";
import { FormProvider, useForm } from "react-hook-form";
import HTMLEditor from "../../components/HTMLEditor";
import { toast } from "react-toastify";

const CreateEvent = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [isDraft, setIsDraft] = useState(true);
  const [isOnline, setIsOnline] = useState(null);
  const [isPaid, setIsPaid] = useState(null);
  const [dateTimeStart, setDateTimeStart] = useState(null);
  const [dateTimeEnd, setDateTimeEnd] = useState(null);
  const [dateTimeWarningMsg, setDateTimeWarningMsg] = useState();
  const [priceType, setPriceType] = useState();
  const [nominalPrice, setNominalPrice] = useState();
  const [readyToSubmit, setReadyToSubmit] = useState(true);

  const methods = useForm();
  const { errors } = methods.formState;

  const onImageChange = ({ target }) => {
    if (target.files && target.files.length > 0) {
      setSelectedImage(target.files[0]);
    }
  };

  const onSubmit = (data) => {
    if (!readyToSubmit) {
      return toast.warning("Save event failed! some field still invalid", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }

    const {
      dateTimeEnd,
      dateTimeStart,
      description,
      eventImage: evi,
      isOnline: io,
      location: loc,
      isPaid: ip,
      nominalPrice: np,
      priceType: pt,
      title,
    } = data;

    // form condition
    // when (isOnline true) then remove render location field
    // when (isPaid true) then remove render nominalPrice & priceType field

    const dataReady = {
      dateTimeEnd,
      dateTimeStart,
      description,
      eventImage: evi[0],
      isOnline: io === "true" ? true : false,
      location: io === "false" ? loc : "",
      isPaid: ip === "true" ? true : false,
      nominalPrice: ip === "true" ? np : 0,
      priceType: ip === "true" ? pt : "",
      title,
      isDraft,
    };

    console.log(dataReady);
  };

  useEffect(() => {
    if (
      dateTimeStart &&
      dateTimeEnd &&
      new Date(dateTimeStart).getTime() > new Date(dateTimeEnd).getTime()
    ) {
      setReadyToSubmit(false);
      return setDateTimeWarningMsg("event end cannot less than event start");
    }

    setReadyToSubmit(true);
    setDateTimeWarningMsg("");
  }, [dateTimeStart, dateTimeEnd]);

  return (
    <>
      <Head title="Create Events" />

      <DashboardLayout>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="bg-white md:col-span-2 pt-10 pb-5 px-6 md:px-8 xl:px-10 border-b">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
                Create your event
              </h1>
              <p>
                Create Event, like your name and address, that you use on Nio
                Platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 bg-white rounded-lg">
              <div className="row-end-2 md:row-end-auto md:col-span-2 px-6 pt-6 pb-0 md:p-8 xl:p-10 border-r-0 md:border-r">
                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Title" />
                  </div>
                  <TextInput
                    type="text"
                    name="title"
                    id="title"
                    icon={MdTitle}
                    placeholder="Enter your event title"
                    {...methods.register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-xs mt-1 text-red-800 font-bold">
                      * This field is required
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload file" />
                  </div>
                  <FileInput
                    accept="image/*"
                    name="eventImage"
                    id="file"
                    helperText="Event photos are useful in giving a first impression of the event being held"
                    {...methods.register("eventImage", {
                      required: true,
                      onChange: onImageChange,
                    })}
                  />
                  {errors.eventImage && (
                    <p className="text-xs mt-1 text-red-800 font-bold">
                      * This field is required
                    </p>
                  )}
                  <div className="mt-3">
                    <img
                      className="object-fit rounded w-full aspect-video"
                      src={
                        !selectedImage
                          ? "https://via.placeholder.com/670x400"
                          : URL.createObjectURL(selectedImage)
                      }
                      alt=""
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="fullName" value="Full name" />
                  </div>
                  <HTMLEditor name="description" />
                  {errors.description && (
                    <p className="text-xs mt-1 text-red-800 font-bold">
                      * This field is required
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="eventType" value="Event type" />
                  </div>

                  <Select
                    id="isOnline"
                    name="isOnline"
                    icon={
                      isOnline === "true"
                        ? HiStatusOnline
                        : HiOutlineStatusOffline
                    }
                    {...methods.register("isOnline", {
                      required: true,
                      onChange: ({ target }) => setIsOnline(target.value),
                    })}
                  >
                    <option value="">Choose a type</option>
                    <option value={true}>Online</option>
                    <option value={false}>Offline</option>
                  </Select>
                  {errors.isOnline && (
                    <p className="text-xs mt-1 text-red-800 font-bold">
                      * This field is required
                    </p>
                  )}
                </div>
                {isOnline === "false" && (
                  <div className="mb-6">
                    <div className="mb-2 block">
                      <Label htmlFor="location" value="Location" />
                    </div>

                    <TextInput
                      name="location"
                      id="location"
                      icon={HiLocationMarker}
                      placeholder="Enter event location"
                      {...methods.register("location", { required: true })}
                    />

                    {errors.location && (
                      <p className="text-xs mt-1 text-red-800 font-bold">
                        * This field is required
                      </p>
                    )}
                  </div>
                )}

                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="isPaid" value="Event price" />
                  </div>

                  <Select
                    name="isPaid"
                    id="isPaid"
                    icon={isPaid === "true" ? FaMoneyBill : MdMoneyOff}
                    {...methods.register("isPaid", {
                      required: true,
                      onChange: ({ target }) => setIsPaid(target.value),
                    })}
                  >
                    <option value="">Choose a type</option>
                    <option value={true}>Paid</option>
                    <option value={false}>Free</option>
                  </Select>
                  {errors.isPaid && (
                    <p className="text-xs mt-1 text-red-800 font-bold">
                      * This field is required
                    </p>
                  )}
                </div>
                {isPaid === "true" && (
                  <>
                    <div className="mb-6">
                      <div className="mb-2 block">
                        <Label htmlFor="nominalPrice" value="Nominal Price" />
                      </div>

                      <TextInput
                        type="number"
                        name="nominalPrice"
                        id="nominalPrice"
                        placeholder="Enter the nominal in IDR format"
                        icon={FaMoneyBillAlt}
                        {...methods.register("nominalPrice", {
                          required: true,
                          onChange: ({ target }) =>
                            setNominalPrice(target.value),
                          value: nominalPrice,
                          min: 1000,
                        })}
                      />
                      {errors.nominalPrice && (
                        <p className="text-xs mt-1 text-red-800 font-bold">
                          * This field is required and must be greater than 1000
                        </p>
                      )}
                    </div>

                    <div className="mb-6">
                      <div className="mb-2 block">
                        <Label htmlFor="priceType" value="Price type" />
                      </div>

                      <Select
                        id="priceType"
                        name="priceType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        icon={priceType === "person" ? MdPerson : MdGroup}
                        {...methods.register("priceType", {
                          required: true,
                          onChange: ({ target }) => setPriceType(target.value),
                        })}
                      >
                        <option value="">Choose a price type</option>
                        <option value="person">Person</option>
                        <option value="team">Team</option>
                      </Select>
                      {errors.priceType && (
                        <p className="text-xs mt-1 text-red-800 font-bold">
                          * This field is required
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="h-fit md:sticky md:top-16">
                <div className="px-6 pb-6 pt-0 md:p-8 xl:p-10">
                  <div className="mb-6">
                    <div className="mb-2 block">
                      <Label htmlFor="dateTimeStart" value="Event start" />
                    </div>

                    <TextInput
                      type="datetime-local"
                      id="dateTimeStart"
                      name="dateTimeStart"
                      icon={BiCalendar}
                      {...methods.register("dateTimeStart", {
                        required: true,
                        onChange: ({ target }) =>
                          setDateTimeStart(target.value),
                      })}
                    />
                    {errors.dateTimeStart && (
                      <p className="text-xs mt-1 text-red-800 font-bold">
                        * This field is required
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="mb-2 block">
                      <Label htmlFor="dateTimeEnd" value="Event end" />
                    </div>

                    <TextInput
                      type="datetime-local"
                      id="dateTimeEnd"
                      name="dateTimeEnd"
                      icon={BiCalendarCheck}
                      {...methods.register("dateTimeEnd", {
                        required: true,
                        onChange: ({ target }) => setDateTimeEnd(target.value),
                      })}
                    />
                    {errors.dateTimeEnd && (
                      <p className="text-xs mt-1 text-red-800 font-bold">
                        * This field is required
                      </p>
                    )}

                    {dateTimeWarningMsg && (
                      <p className="text-xs mt-1 text-red-800 font-bold">
                        {dateTimeWarningMsg}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex">
                      <ToggleSwitch
                        checked={isDraft}
                        onChange={() => setIsDraft(!isDraft)}
                        id="isDraft"
                        name="isDraft"
                      />
                      <label htmlFor="isDraft">
                        {isDraft ? "Save as Draft" : "Request Publication"}
                      </label>
                    </div>
                  </div>

                  <div className="w-full [&>button]:w-full md:[&>button]:w-fit">
                    <Button type="submit">Save Event</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </DashboardLayout>
    </>
  );
};

export default CreateEvent;
