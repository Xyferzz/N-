import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).send("Missing code");
    }

    const { data, error } = await supabase
      .from("links")
      .select("file_url")
      .eq("code", code)
      .single();

    if (error || !data) {
      return res.status(404).send("Image not found");
    }

    return res.redirect(302, data.file_url);

  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
}
