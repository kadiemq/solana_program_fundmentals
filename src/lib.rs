use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

entrypoint!(process_instruction);
fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let key: &u8 = instruction_data.first().unwrap();
    
    match key {
        0 => msg!("0"),
        1 => msg!("1"),
        _ => msg!("None")
    }

    Ok(())
}