import api from "../../api";
import { useState, useEffect } from "react";
import CampaignCard from "./campaignCard";

export default function GetCampaigns() {
    const [campaigns, setCampaigns] = useState<any[]>([]);

    async function getCampaigns() {
        try {
            const res = await api.get("/promotion/getcampaigns",
                { withCredentials: true }
            );
            setCampaigns(res.data.message); 
        }
        catch (err: any) {
            setCampaigns([]);
        }
    }

    useEffect(() => {
        getCampaigns();
    }, []);

    return (
        <div>
            {campaigns.map((p) => (
                <CampaignCard
                    key={p.id}
                    name={p.name}
                    description={p.description}
                />
            ))}
        </div>
    );
}