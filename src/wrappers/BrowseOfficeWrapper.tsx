import OfficeCard from "../components/OfficeCard";
import { Office } from "../types/type";
import { useEffect, useState } from "react";
import apiClient from "../services/apiService";

export default function BrowseCityWrapper() {
    const [office, setOffice] = useState<Office[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        apiClient.get("/offices")
            .then((response) => {
                setOffice(response.data);
                setLoading(false);
            }).catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return (
            <section
                id="Fresh-Space"
                className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
            >
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
                    Browse Our Fresh Space.
                    <br />
                    For Your Better Productivity.
                </h2>
                <p className="text-center">Loading...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section
                id="Fresh-Space"
                className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
            >
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
                    Browse Our Fresh Space.
                    <br />
                    For Your Better Productivity.
                </h2>
                <p className="text-center">Error loading data : {error}</p>
            </section>
        )
    }

    return (
        <section
            id="Fresh-Space"
            className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
        >
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
                Browse Our Fresh Space.
                <br />
                For Your Better Productivity.
            </h2>
            <div className="grid grid-cols-3 gap-[30px]">
                {
                    office.map((office) => (
                        <OfficeCard key={office.id} office={office} />
                    ))
                }
            </div>
        </section>
    )
}