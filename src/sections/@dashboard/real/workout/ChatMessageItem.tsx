import { formatDistanceToNowStrict } from 'date-fns';
// @mui
import { styled } from '@mui/material/styles';
import { Avatar, Box, Typography, Stack, Button } from '@mui/material';
import Iconify from 'src/components/Iconify';
import { Message } from 'src/zustand/useStore';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(3),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 320,
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
}));

const InfoStyle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(0.75),
  color: theme.palette.text.secondary,
}));

const MessageImgStyle = styled('img')(({ theme }) => ({
  height: 200,
  minWidth: 296,
  width: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
}));

// ----------------------------------------------------------------------

type ChatMessageItemProps = {
  message: Message;
  onOpenLightbox: (value: string) => void;
  // message: Message;
  // onOpenLightbox: (value: string) => void;
};

export default function ChatMessageItem({ message, onOpenLightbox }: ChatMessageItemProps) {
  const senderDetails =
    message.senderId === 'admin' ? { type: 'admin' } : { name: 'SuperSmartChat' };

  const isAdmin = senderDetails.type === 'admin';
  const isImage = message.contentType === 'image';
  const firstName = senderDetails.name && senderDetails.name.split(' ')[0];

  console.log('ChatMessageItem message', message);
  return (
    <RootStyle>
      <Box
        sx={{
          display: 'flex',
          ...(isAdmin && {
            ml: 'auto',
          }),
        }}
      >
        {senderDetails.type !== 'admin' && (
          <Avatar
            alt={senderDetails.name}
            sx={{ width: 32, height: 32, backgroundColor: '#0BA37F' }}
          >
            <svg data-name="OpenAI Logo" width={24} height={24} viewBox="140 140 520 520">
              <path
                d="M617.24 354a126.36 126.36 0 0 0-10.86-103.79 127.8 127.8 0 0 0-137.65-61.32 126.36 126.36 0 0 0-95.31-42.49 127.81 127.81 0 0 0-121.92 88.49 126.4 126.4 0 0 0-84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3A127.82 127.82 0 0 0 617.24 354zM426.58 620.49a94.79 94.79 0 0 1-60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37V381.69l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1-94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1-11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1-.61 1.31l-102.1 58.95a95.16 95.16 0 0 1-129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36L376.8 476.8l-42.69 24.65a1.53 1.53 0 0 1-1.44.13l-102.11-59a95.16 95.16 0 0 1-34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1-14.69 171.55V408.75a16.4 16.4 0 0 0-8.24-14.36zM589 330.44c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0-16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9A95.07 95.07 0 0 1 589 330.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1-.83-1.17V274.57a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0-8.3 14.36zm23.19-50L400 336.59l54.92 31.7v63.42L400 463.41l-54.92-31.7z"
                fill="#fff"
              />
            </svg>
          </Avatar>
        )}

        <Box sx={{ ml: 2 }}>
          <InfoStyle
            noWrap
            variant="caption"
            sx={{ ...(isAdmin && { justifyContent: 'flex-end' }) }}
          >
            {!isAdmin && `${firstName},`}&nbsp;
            {formatDistanceToNowStrict(new Date(message.createdAt), {
              addSuffix: true,
            })}
          </InfoStyle>
          <ContentStyle
            sx={{
              ...(isAdmin && {
                color: 'grey.800',
                bgcolor: 'primary.lighter',
              }),
            }}
          >
            {isImage ? (
              <MessageImgStyle
                alt="attachment"
                src={message.body}
                onClick={() => onOpenLightbox(message.body)}
              />
            ) : (
              <Stack spacing={2}>
                <Typography variant="body2" dangerouslySetInnerHTML={{ __html: message.body }} />

                {/* <Stack direction="row" spacing={2} alignItems="flex-end" sx={{ flexGrow: 1 }}> */}
                {message?.buttons?.map((item: any) => (
                  <Button
                    key={item}
                    fullWidth
                    variant="outlined"
                    // endIcon={<Iconify icon={'eva:checkmark-circle-2-fill'} />}
                  >
                    {item}
                  </Button>
                ))}
                {/* </Stack> */}
              </Stack>
            )}
          </ContentStyle>
        </Box>
      </Box>
    </RootStyle>
  );
}