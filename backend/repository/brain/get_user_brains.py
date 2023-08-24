from uuid import UUID
from typing import Optional, List

from models import BrainEntity, get_supabase_db


def get_user_brains(user_id: UUID) -> List[BrainEntity]:
    supabase_db = get_supabase_db()
    results = supabase_db.get_user_brains(user_id)

    return results
