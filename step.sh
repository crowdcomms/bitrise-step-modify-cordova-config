#!/bin/bash
set -e

step_dir=$(cd $(dirname ${BASH_SOURCE[0]}) && pwd)

(cd $step_dir && npm install --quiet)
(cd $step_dir && node index.js node index.js --bundle-id="${id}" --bundle-name="${name}" --ios-version="${version}" --ios-build-number="${ios_bundle_version}" --android-version="${android_version_code}" --path-to-config="${path_to_config}")

exit $?

# echo "This is the value specified for the input 'example_step_input': ${example_step_input}"

#
# --- Export Environment Variables for other Steps:
# You can export Environment Variables for other Steps with
#  envman, which is automatically installed by `bitrise setup`.
# A very simple example:
# envman add --key EXAMPLE_STEP_OUTPUT --value 'the value you want to share'
# Envman can handle piped inputs, which is useful if the text you want to
# share is complex and you don't want to deal with proper bash escaping:
#  cat file_with_complex_input | envman add --KEY EXAMPLE_STEP_OUTPUT
# You can find more usage examples on envman's GitHub page
#  at: https://github.com/bitrise-io/envman

#
# --- Exit codes:
# The exit code of your Step is very important. If you return
#  with a 0 exit code `bitrise` will register your Step as "successful".
# Any non zero exit code will be registered as "failed" by `bitrise`.