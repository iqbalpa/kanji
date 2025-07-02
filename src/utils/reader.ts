interface Kanji {
    kanji: string;
    read: string[];
    meaning: string[];
}

export async function readKanji(fpath: string): Promise<Kanji[]> {
    const response = await fetch(fpath);
    if (!response.ok) {
        throw new Error(`Failed to fetch kanji data from ${fpath}`);
    }
    const data: Kanji[] = await response.json();
    return data;
}
