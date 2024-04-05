import * as React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { useTheme } from "../../../../../App";
import { useAuthenticationContext } from "../../../../../../shared/utils/src";
import { baseFetcher } from "../../../../../../libs/data-access/src/baseFetcher";
import { SplButton } from "../../../../../../shared/ui";

export const GoogleLoginButton: React.FC = () => {
  const { colors } = useTheme();
  const { logIn } = useAuthenticationContext();

  const login = useGoogleLogin({
    redirect_uri: `${window.location.origin}`,
    onSuccess: async (success) => {
      await baseFetcher("/auth").post({ code: success.code });
      logIn();
    },
    flow: "auth-code",
  });

  const googleIcon = React.useMemo(
    () =>
      ({
        icon: "google",
        iconColor: colors.text_primary,
        size: 24,
      } as const),
    [colors.text_primary]
  );

  return (
    <SplButton buttonVariant="p_action_btn" icon={googleIcon} onClick={login}>
      Continue with Google
    </SplButton>
    // <button onClick={login}>
    //   <Flex
    //     bgColor={colors.brand_accent}
    //     px="4"
    //     py="2"
    //     borderRadius={8}
    //     alignItems="center"
    //     gap="2.5"
    //   >
    //     <SvgIcon icon="google" size={24} />
    //     <Text {...textStyles.body3_700} color={colors.text_primary}>
    //       Continue with Google
    //     </Text>
    //   </Flex>
    // </button>
  );
};
