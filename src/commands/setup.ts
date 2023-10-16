import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('setup')
  .setDescription('Initiates the tournament.')
  .addChannelOption((option) =>
    option
      .setName('standings-channel')
      .setDescription('Swissys chat to report the standings')
      .setRequired(true)
  )
  .addChannelOption((option) =>
    option
      .setName('pairings-channel')
      .setDescription('Swissys chat to report the pairings')
      .setRequired(true)
  )
  .addRoleOption((option) =>
    option
      .setName('participant-role')
      .setDescription('Role to be assigned to participants')
      .setRequired(true)
  )

export async function execute(
  interaction: ChatInputCommandInteraction
) {
  const standingsChannel = interaction.options.getChannel(
    'standings-channel'
  )
  const pairingsChannel = interaction.options.getChannel(
    'pairings-channel'
  )
  const participantRole = interaction.options.getRole(
    'participant-role'
  )
  if (!standingsChannel || !pairingsChannel || !participantRole)
    return await interaction.reply(
      'Please provide all the required options.'
    )
  return await interaction.reply(
    `
    
    A tournament was created with the following settings:
     
    StandingsChannel: ${standingsChannel} 
    PairingsChannel: ${pairingsChannel}
    Role for participants: ${participantRole}
    
    
    To start this tournament, please use the \`/start\` command.
    `
  )
}
