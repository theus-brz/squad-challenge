import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import ActionButton from '../../components/ActionButton/ActionButton';
import Card from '../../components/Card/Card';
import InputRadio from '../../components/InputRadio/InputRadio';
import InputTag from '../../components/InputTag/InputTag';
import InputText from '../../components/InputText/InputText';
import InputTextArea from '../../components/InputTextArea/InputTextArea';
import RESOURCES from '../../constants/RESOURCES';
import { setTeams, setSelectedTeam } from '../../store/modules/teams/actions';
import isObjEmpty from '../../utils/isObjEmpty';
import {
  ManageTeamContainer,
  ManageTeamContainerTitle,
  ManageTeamInformationContainer,
  ManageTeamBlock,
} from './ManageTeamStyles';

function ManageTeam() {
  const { selectedTeam, myTeams } = useSelector((state) => state.teams);
  const { id, name, description, website, type, tags } = selectedTeam;

  const [teamId] = useState(id || new Date().getTime());
  const [teamName, setTeamName] = useState(name);
  const [teamDescription, setTeamDescription] = useState(description);
  const [teamWebsite, setTeamWebsite] = useState(website);
  const [teamType, setTeamType] = useState(type);
  const [teamTags, setTeamTags] = useState(tags);
  const [teamTag, setTeamTag] = useState('');
  const [teamError, setTeamError] = useState({});
  const error = {};

  const {
    PAGES: {
      MANAGE_TEAM: {
        CREATE_YOUR_TEAM_CARD: {
          TEAM_INFORMATION_SECTION: {
            TEAM_INFORMATION_SECTION_TITLE,
            NAME_INPUT: {
              NAME_INPUT_TITLE,
              NAME_INPUT_PLACEHOLDER,
              NAME_INPUT_NAME,
            },
            DESCRIPTION_INPUT: {
              DESCRIPTION_INPUT_TITLE,
              DESCRIPTION_INPUT_PLACEHOLDER,
              DESCRIPTION_INPUT_NAME,
            },
            WEBSITE_INPUT: {
              WEBSITE_INPUT_TITLE,
              WEBSITE_INPUT_PLACEHOLDER,
              WEBSITE_INPUT_NAME,
            },
            TYPE_INPUT: { TYPE_INPUT_TITLE, TYPE_INPUTS, TYPE_INPUT_NAME },
            TAGS_INPUT: {
              TAGS_INPUT_TITLE,
              TAGS_INPUT_PLACEHOLDER,
              TAGS_INPUT_NAME,
            },
          },
          CONFIGURE_SQUAD_SECTION: {
            CONFIGURE_SQUAD_SECTION_TITLE,
            SEARCH_INPUT: {
              SEARCH_INPUT_TITLE,
              SEARCH_INPUT_PLACEHOLDER,
              SEARCH_INPUT_NAME,
            },
          },
          SUBMIT_BUTTON_TITLE,
        },
      },
    },
  } = RESOURCES;

  const dispatch = useDispatch();
  const history = useHistory();

  function handleNavigation() {
    history.goBack();
  }

  function clearSelectedTeam() {
    const emptySelectedTeam = { id: null, name: '', description: '' };

    dispatch(setSelectedTeam(emptySelectedTeam));
  }

  function commitTeam(newTeam) {
    const teamsAfterSelectedTeam = myTeams
      .slice()
      .filter((team) => team.id !== newTeam.id);
    clearSelectedTeam();

    return [...teamsAfterSelectedTeam, newTeam];
  }

  function onKeyDown(e) {
    const val = e.target.value;

    if ((e.charCode || e.keyCode) === 13) {
      e.preventDefault();
      setTeamTags([...teamTags, val]);
      setTeamTag('');
    }
  }

  function removeTag(e) {
    const tagsAfterRemoveItem = teamTags.slice().filter((tag) => tag !== e);
    setTeamTags(tagsAfterRemoveItem);
  }

  function setError(value, input) {
    if (value === '') {
      setTeamError({ ...teamError, [input]: true });
      error[input] = true;
    }
    if (value !== '') {
      delete teamError[input];
      delete error[input];
    }
  }

  function getError(input) {
    return teamError[input] || error[input];
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    setError(teamName, 'name');
    setError(teamWebsite, WEBSITE_INPUT_NAME);
    setError(teamType, TYPE_INPUT_NAME);

    if (!isObjEmpty(error))
      return toast.error(
        'Please fill in all required fields (name, website and type)'
      );

    const values = {
      id: teamId,
      name: teamName,
      description: teamDescription,
      website: teamWebsite,
      type: teamType,
      tags: teamTags,
    };

    if (teamTag !== '') values.tags = [...teamTags, teamTag];

    dispatch(setTeams(commitTeam(values)));
    return handleNavigation();
  }

  return (
    <ManageTeamContainer>
      <Card title="Create your team">
        <ManageTeamContainerTitle>
          {TEAM_INFORMATION_SECTION_TITLE}
        </ManageTeamContainerTitle>
        <ManageTeamBlock>
          <ManageTeamInformationContainer>
            <InputText
              inputTitle={NAME_INPUT_TITLE}
              inputName={NAME_INPUT_NAME}
              inputPlaceholder={NAME_INPUT_PLACEHOLDER}
              inputOnChange={(e) => {
                setTeamName(e.target.value);
                setError(teamName, NAME_INPUT_NAME);
              }}
              inputOnBlur={() => setError(teamName, NAME_INPUT_NAME)}
              inputValue={teamName}
              inputError={getError(NAME_INPUT_NAME)}
            />

            <InputTextArea
              inputTitle={DESCRIPTION_INPUT_TITLE}
              inputName={DESCRIPTION_INPUT_NAME}
              inputPlaceholder={DESCRIPTION_INPUT_PLACEHOLDER}
              inputOnChange={(e) => setTeamDescription(e.target.value)}
              inputValue={teamDescription}
            />
          </ManageTeamInformationContainer>

          <ManageTeamInformationContainer>
            <InputText
              inputTitle={WEBSITE_INPUT_TITLE}
              inputType="url"
              inputName={WEBSITE_INPUT_NAME}
              inputPlaceholder={WEBSITE_INPUT_PLACEHOLDER}
              inputOnChange={(e) => {
                setTeamWebsite(e.target.value);
                setError(teamWebsite, WEBSITE_INPUT_NAME);
              }}
              inputOnBlur={() => setError(teamWebsite, WEBSITE_INPUT_NAME)}
              inputValue={teamWebsite}
              inputError={getError(WEBSITE_INPUT_NAME)}
            />

            <InputRadio
              inputTitle={TYPE_INPUT_TITLE}
              inputName={TYPE_INPUT_NAME}
              inputError={getError(TYPE_INPUT_NAME)}
              inputRadios={TYPE_INPUTS}
              currentValueSelected={teamType}
              onChange={(e) => setTeamType(e.target.value)}
            />

            <InputTag
              inputTitle={TAGS_INPUT_TITLE}
              tags={teamTags}
              inputPlaceholder={TAGS_INPUT_PLACEHOLDER}
              inputName={TAGS_INPUT_NAME}
              tagButton={(e) => removeTag(e)}
              inputOnChange={(e) => {
                setTeamTag(e.target.value);
              }}
              inputValue={teamTag}
              inputOnKeyDown={onKeyDown}
            />
          </ManageTeamInformationContainer>
        </ManageTeamBlock>

        <ManageTeamContainerTitle>
          {CONFIGURE_SQUAD_SECTION_TITLE}
        </ManageTeamContainerTitle>
        <ManageTeamBlock>
          <ManageTeamInformationContainer>
            <Card primary={false}>
              <div style={{ height: '500px' }} />
            </Card>
          </ManageTeamInformationContainer>

          <ManageTeamInformationContainer>
            <InputText
              inputTitle={SEARCH_INPUT_TITLE}
              inputName={SEARCH_INPUT_NAME}
              inputPlaceholder={SEARCH_INPUT_PLACEHOLDER}
              inputOnChange={() => {}}
              inputValue=""
            />
          </ManageTeamInformationContainer>
        </ManageTeamBlock>

        <ManageTeamBlock>
          <ActionButton
            type="submit"
            title={SUBMIT_BUTTON_TITLE}
            onClick={(e) => handleSubmitButton(e)}
          />
        </ManageTeamBlock>
      </Card>
    </ManageTeamContainer>
  );
}

export default ManageTeam;
